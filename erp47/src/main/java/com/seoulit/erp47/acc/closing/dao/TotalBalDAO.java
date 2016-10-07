package com.seoulit.erp47.acc.closing.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.closing.to.TotalBalBean;

public interface TotalBalDAO {

    List<TotalBalBean> selectTotalBalList(Map<String, Object> argsMap);

}
