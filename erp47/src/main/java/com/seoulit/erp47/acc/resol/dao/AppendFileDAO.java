package com.seoulit.erp47.acc.resol.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.resol.to.AppendFileBean;

public interface AppendFileDAO {

    List<AppendFileBean> selectAppendFileDetail(Map<String, String> argsMap);

}
