package com.seoulit.erp47.com.util.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.com.util.to.OutCodeBean;

public interface CodeUtilDAO {

    public List<OutCodeBean> selectCodeList(String code);

    public String selectCodeName(Map<String, String> argsMap);
}
