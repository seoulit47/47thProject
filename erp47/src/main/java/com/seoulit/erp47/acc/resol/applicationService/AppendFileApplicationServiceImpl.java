package com.seoulit.erp47.acc.resol.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.acc.resol.dao.AppendFileDAO;
import com.seoulit.erp47.acc.resol.to.AppendFileBean;

@Service
public class AppendFileApplicationServiceImpl implements AppendFileApplicationService{
    @Autowired
    AppendFileDAO appendFileDAO;
    
    @Override
    public List<AppendFileBean> findAppendFileDetail(Map<String, String> argsMap) {
        return appendFileDAO.selectAppendFileDetail(argsMap);
    }

}
