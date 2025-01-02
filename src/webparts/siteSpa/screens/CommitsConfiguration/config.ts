export const scriptPritier = `
{
  "format": "prettier --write './src/**/*.{js,jsx,ts,tsx}'",
}
`;
export const scriptHusky = `
{
  "prepare": "husky"
}
`;
export const scriptCZ = `
{
  "commit": "cz"
}
`;

export const configCommitizen = `
{
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog",
    },
  },
}
`;
