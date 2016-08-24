package com.seoulit.erp47.common.util;

import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataSetList;
import com.nexacro.xapi.data.Debugger;
import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.VariableList;

public class NexacroLogger {
    
    private final static Debugger debugger = new Debugger();
    
    // �����ͼ� ���
    public static void debug(PlatformData platformData, String datasetName) {
        DataSet dataSet = platformData.getDataSet(datasetName);
        System.out.println(debugger.detail(dataSet));
    }
    
    // �����ͼ�, ���ڸ���Ʈ ��� ���
    public static void debug(PlatformData platformData) {
        debug(platformData.getDataSetList());
        debug(platformData.getVariableList());
    }
    
    // �����ͼ�, ���ڸ���Ʈ ��� ���
    public static void debug(DataSetList dataSetList, VariableList variableList) {
        debug(dataSetList);
        debug(variableList);
    }
    

    // �����ͼ�(dataset) ���
    public static void debug(DataSetList dataSetList) {
        // DEBUG -> DataSetList
        int dataSetListCount = dataSetList.size();
        for (int index = 0; index < dataSetListCount; index++) {
            System.out.println(debugger.detail(dataSetList.get(index)));
        }
    }
    
    // ���ڸ���Ʈ(argument) ���
    public static void debug(VariableList variableList) {
        int variableListCount = variableList.size();
        for (int index = 0; index < variableListCount; index++) {
            System.out.println(debugger.detail(variableList.get(index)));
        }
    }
}
