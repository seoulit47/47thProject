package com.seoulit.erp47.acc.resol.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.resol.to.AppendFileBean;

public interface AppendFileApplicationService {

    List<AppendFileBean> findAppendFileDetail(Map<String, String> argsMap);

}
