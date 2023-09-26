/*
 * @Description: 
 * @Author: lijin
 * @Date: 2023-09-26 10:19:49
 * @LastEditTime: 2023-09-26 10:19:55
 * @LastEditors:  
 */
const ts = require("./built/local/typescript");

const filename = "./input.ts";
const program = ts.createProgram([filename], {
  allowJs: false,
  strictNullChecks: true,
});

const sourceFile = program.getSourceFile(filename);
const typeChecker = program.getTypeChecker();

function visitNode(node) {
  if (
    node.kind === ts.SyntaxKind.TypeAliasDeclaration &&
    node.name.escapedText === "res"
  ) {
    const type = typeChecker.getTypeFromTypeNode(node.name);

    console.log(type);
  }

  node.forEachChild((child) => visitNode(child));
}

visitNode(sourceFile);
