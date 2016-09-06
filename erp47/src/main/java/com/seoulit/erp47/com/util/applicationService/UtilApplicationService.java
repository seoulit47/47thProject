package com.seoulit.erp47.com.util.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.com.util.to.BindCodeBean;
import com.seoulit.erp47.com.util.to.OutCodeBean;

public interface UtilApplicationService {

    public Map<String, List<OutCodeBean>> bindCode(List<BindCodeBean> bindCodeList);

    public String findDate(Map<String, String> argsMap);

    public String findCodeName(Map<String, String> argsMap);
}
