export import helpers = require("./helpers");
import tsStructureParser = require("./tsStructureParser");

export function parseStruct(content:string,modules:{[path:string]:tsStructureParser.Module},mpth:string):tsStructureParser.Module{
    return tsStructureParser.parseStruct(content,modules,mpth);
}