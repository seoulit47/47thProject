package com.seoulit.erp47.acc.resol.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.resol.to.ResolLetBean;

public interface ResolLetDAO {

    List<ResolLetBean> selectResolLetList(Map<String, String> argsMap);

    String getResolNo();

    void insertResolLet(ResolLetBean resolLetBean);

    void updateResolLet(ResolLetBean resolLetBean);

}
