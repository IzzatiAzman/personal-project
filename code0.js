gdjs.MenuCode = {};
gdjs.MenuCode.GDPanelObjects1= [];
gdjs.MenuCode.GDPanelObjects2= [];
gdjs.MenuCode.GDPanelObjects3= [];
gdjs.MenuCode.GDPlayObjects1= [];
gdjs.MenuCode.GDPlayObjects2= [];
gdjs.MenuCode.GDPlayObjects3= [];
gdjs.MenuCode.GDStartObjects1= [];
gdjs.MenuCode.GDStartObjects2= [];
gdjs.MenuCode.GDStartObjects3= [];
gdjs.MenuCode.GDtxtentryObjects1= [];
gdjs.MenuCode.GDtxtentryObjects2= [];
gdjs.MenuCode.GDtxtentryObjects3= [];
gdjs.MenuCode.GDmessageObjects1= [];
gdjs.MenuCode.GDmessageObjects2= [];
gdjs.MenuCode.GDmessageObjects3= [];


gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDPlayObjects2Objects = Hashtable.newFrom({"Play": gdjs.MenuCode.GDPlayObjects2});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Panel"), gdjs.MenuCode.GDPanelObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDPanelObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDPanelObjects2[i].getY() > 120 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDPanelObjects2[k] = gdjs.MenuCode.GDPanelObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDPanelObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14761148);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDPanelObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects2);
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.MenuCode.GDStartObjects2);
gdjs.copyArray(runtimeScene.getObjects("message"), gdjs.MenuCode.GDmessageObjects2);
gdjs.copyArray(runtimeScene.getObjects("txtentry"), gdjs.MenuCode.GDtxtentryObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDPanelObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDPanelObjects2[i].activateBehavior("EllipseMovement", false);
}
}{for(var i = 0, len = gdjs.MenuCode.GDPlayObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayObjects2[i].activateBehavior("EllipseMovement", false);
}
}{for(var i = 0, len = gdjs.MenuCode.GDStartObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDStartObjects2[i].activateBehavior("EllipseMovement", false);
}
}{for(var i = 0, len = gdjs.MenuCode.GDtxtentryObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDtxtentryObjects2[i].activateBehavior("EllipseMovement", false);
}
}{for(var i = 0, len = gdjs.MenuCode.GDmessageObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDmessageObjects2[i].activateBehavior("EllipseMovement", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDPlayObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14763324);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Panel"), gdjs.MenuCode.GDPanelObjects2);
/* Reuse gdjs.MenuCode.GDPlayObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.MenuCode.GDStartObjects2);
gdjs.copyArray(runtimeScene.getObjects("message"), gdjs.MenuCode.GDmessageObjects2);
gdjs.copyArray(runtimeScene.getObjects("txtentry"), gdjs.MenuCode.GDtxtentryObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDPanelObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDPanelObjects2[i].activateBehavior("EllipseMovement", true);
}
}{for(var i = 0, len = gdjs.MenuCode.GDPlayObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayObjects2[i].activateBehavior("EllipseMovement", true);
}
}{for(var i = 0, len = gdjs.MenuCode.GDStartObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDStartObjects2[i].activateBehavior("EllipseMovement", true);
}
}{for(var i = 0, len = gdjs.MenuCode.GDtxtentryObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDtxtentryObjects2[i].activateBehavior("EllipseMovement", true);
}
}{for(var i = 0, len = gdjs.MenuCode.GDmessageObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDmessageObjects2[i].activateBehavior("EllipseMovement", true);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Panel"), gdjs.MenuCode.GDPanelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDPanelObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDPanelObjects1[i].getY() < -(337) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDPanelObjects1[k] = gdjs.MenuCode.GDPanelObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDPanelObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14765180);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDPanelObjects1.length = 0;
gdjs.MenuCode.GDPanelObjects2.length = 0;
gdjs.MenuCode.GDPanelObjects3.length = 0;
gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;
gdjs.MenuCode.GDPlayObjects3.length = 0;
gdjs.MenuCode.GDStartObjects1.length = 0;
gdjs.MenuCode.GDStartObjects2.length = 0;
gdjs.MenuCode.GDStartObjects3.length = 0;
gdjs.MenuCode.GDtxtentryObjects1.length = 0;
gdjs.MenuCode.GDtxtentryObjects2.length = 0;
gdjs.MenuCode.GDtxtentryObjects3.length = 0;
gdjs.MenuCode.GDmessageObjects1.length = 0;
gdjs.MenuCode.GDmessageObjects2.length = 0;
gdjs.MenuCode.GDmessageObjects3.length = 0;

gdjs.MenuCode.eventsList1(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
