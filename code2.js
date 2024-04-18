gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.GDtxtObjects1= [];
gdjs.LeaderboardCode.GDtxtObjects2= [];


gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

};gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

{



}


{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().get("i");
const valueIteratorReference2 = runtimeScene.getScene().getVariables().get("doc");
const iterableReference2 = runtimeScene.getScene().getVariables().get("FetchedData").getChild("docs");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);
gdjs.copyArray(gdjs.LeaderboardCode.GDtxtObjects1, gdjs.LeaderboardCode.GDtxtObjects2);


let isConditionTrue_0 = false;
if (true)
{
{for(var i = 0, len = gdjs.LeaderboardCode.GDtxtObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDtxtObjects2[i].getBehavior("Text").setText(gdjs.LeaderboardCode.GDtxtObjects2[i].getBehavior("Text").getText() + (gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("i")) + 1) + ". " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("doc").getChild("data").getChild("name")) + " >>>" + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("doc").getChild("data").getChild("score")) + gdjs.evtTools.string.newLine()));
}
}}
}
}

}


};gdjs.LeaderboardCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.firebaseTools.firestore.startQuery("Myscore", "Leaderboard");
}{gdjs.evtTools.firebaseTools.firestore.queryOrderBy("Myscore", "score", "desc");
}{gdjs.evtTools.firebaseTools.firestore.watchQuery("Myscore", runtimeScene.getScene().getVariables().get("FetchedData"), runtimeScene.getScene().getVariables().get("Status"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Status")) == "ok";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("txt"), gdjs.LeaderboardCode.GDtxtObjects1);
{runtimeScene.getScene().getVariables().get("Status").setString("");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDtxtObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDtxtObjects1[i].getBehavior("Text").setText("Leaderboard" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine());
}
}
{ //Subevents
gdjs.LeaderboardCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDtxtObjects1.length = 0;
gdjs.LeaderboardCode.GDtxtObjects2.length = 0;

gdjs.LeaderboardCode.eventsList2(runtimeScene);

return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
