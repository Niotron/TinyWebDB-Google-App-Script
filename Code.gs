/*
    _  _  ____  _____  ____  ____  _____  _  _ 
   ( \( )(_  _)(  _  )(_  _)(  _ \(  _  )( \( )
    )  (  _)(_  )(_)(   )(   )   / )(_)(  )  ( 
   (_)\_)(____)(_____) (__) (_)\_)(_____)(_)\_)


   Copyright © 2020 Niotron
   Author  : Tanish Raj
   Website : https://niotron.com
*/

var SpreadsheetUrl = "SPREADSHEET_URL_HERE";
var Sheet = "Sheet1";

function doGet(e){
  return ContentService.createTextOutput(JSON.stringify([401,"Error","This script doesn't support Get Request"]));
}

function doPost(e) {
  var response = '["VALUE","ERROR","Url mismatch. Version not defined"]';
  try{
    var action = e.parameter.version.split("/")[1];
    if(action == "storeavalue"){
       response = storeValue(e.parameter.tag, e.parameter.value);
    }else{
       response = getValue(e.parameter.tag);
    }
  } catch(e){/*No action required*/}
  
  return ContentService.createTextOutput(response);
}


function getValue(tag){
   var response = ["VALUE", tag];
   var sheet = SpreadsheetApp.openByUrl(SpreadsheetUrl).getSheetByName(Sheet);
   var body = sheet.getRange(1, 1, sheet.getLastRow(),1).getValues();
   var stored_tags = [];
   for(var i=0; i<body.length; i++){
       var value = body[i][0];
       if(Number.isInteger(value)){
         value = value.toLocaleString('fullwide', {useGrouping:false});
       }
       stored_tags.push(value);
   }
   
   /*Check if tag exist then update value else appen new row*/
   var index = stored_tags.indexOf(tag) +1;
   if(index>0){
      response.push(sheet.getRange(index, 2).getValue());
   }else{
      response.push("Not_found");
   }
   
   return JSON.stringify(response);
}

function storeValue(tag, valuetostore){
   var sheet = SpreadsheetApp.openByUrl(SpreadsheetUrl).getSheetByName(Sheet);
   var body = sheet.getRange(1, 1, sheet.getLastRow(),1).getValues();
   var stored_tags = [];
   for(var i=0; i<body.length; i++){
       var value = body[i][0];
       if(Number.isInteger(value)){
         value = value.toLocaleString('fullwide', {useGrouping:false});
       }
       stored_tags.push(value);
   }
   
   /*Check if tag exist then update value else appen new row*/
   var index = stored_tags.indexOf(tag) +1;
   if(index>0){
      sheet.getRange(index, 2).setValue(valuetostore);
   }else{
      sheet.appendRow([tag,valuetostore]);
   }
   
   return JSON.stringify(["STORED",tag,"Successfully stored."]);
}

