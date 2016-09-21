package com.seoulit.erp47.acc.resol.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.resol.to.ResolLetBean;

public interface ResolApplicationService {

    List<ResolLetBean> findResolLetList(Map<String, String> argsMap);

    String getResolNo();

    void registResolLet(ResolLetBean resolLetBean);

    void modifyResolLet(ResolLetBean resolLetBean);

}
