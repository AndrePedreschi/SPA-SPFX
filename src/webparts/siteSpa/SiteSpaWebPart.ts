import { createElement, ReactElement } from "react";

import { Version } from "@microsoft/sp-core-library";
import "./styles.css";
import { type IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import {
  BaseClientSideWebPart,
  WebPartContext,
} from "@microsoft/sp-webpart-base";
import {
  PropertyFieldListPicker,
  PropertyFieldListPickerOrderBy,
} from "@pnp/spfx-property-controls/lib/PropertyFieldListPicker";
import * as ReactDom from "react-dom";
import * as strings from "SiteSpaWebPartStrings";

import { App } from "./routes";

//import { spfi, SPFI, SPFx } from "@pnp/sp";
//import { Queryable } from "@pnp/queryable"; // Import para o middleware

export interface ISiteSpaWebPartProps {
  userList: string;
  productsList: string;
  context: WebPartContext;
}

export default class SiteSpaWebPart extends BaseClientSideWebPart<ISiteSpaWebPartProps> {
  //public sp: SPFI; // Instância do SPFI

  public render(): void {
    const element: ReactElement<ISiteSpaWebPartProps> = createElement(App, {
      userList: this.properties.userList,
      productsList: this.properties.productsList,
      context: this.context,
    });
    ReactDom.render(element, this.domElement);
  }

  // Function to remove the img element
  protected removeImage(): void {
    const img = document.querySelector('img[alt="Embed Preview."]');
    if (img) {
      img.remove();
    }
  }

  protected async onInit(): Promise<void> {
    /* const loadingMiddleware = (instance: Queryable):void => {
			instance.on.pre(async (url, init, result) => {
				console.log('Iniciou a request');
			  
				return [url, init, result]
			});

			instance.on.post(async (url, result) => {
				console.log('terminou a request');
			  
				return [url, result]
			});
		};

		// Configura a instância do SPFI com o middleware
		this.sp = spfi().using(SPFx(this.context)).using(loadingMiddleware); */

    await super.onInit();
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.1");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          /* header: {
						description: strings.PropertyPaneDescription
					}, */
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyFieldListPicker("userList", {
                  label: strings.UserListLabel,
                  selectedList: this.properties.userList,
                  includeHidden: false,
                  orderBy: PropertyFieldListPickerOrderBy.Title,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  context: this.context,
                  deferredValidationTime: 0,
                  key: "listPickerFieldId",
                  multiSelect: false,
                  baseTemplate: 100,
                }),
                PropertyFieldListPicker("productsList", {
                  label: strings.ProductListLabel,
                  selectedList: this.properties.productsList,
                  includeHidden: false,
                  orderBy: PropertyFieldListPickerOrderBy.Title,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  context: this.context,
                  deferredValidationTime: 0,
                  key: "listPickerFieldId",
                  multiSelect: false,
                  baseTemplate: 100,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
