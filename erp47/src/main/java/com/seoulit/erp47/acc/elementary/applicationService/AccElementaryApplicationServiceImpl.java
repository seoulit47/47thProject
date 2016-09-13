package com.seoulit.erp47.acc.elementary.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.acc.elementary.dao.AccAcntDAO;
import com.seoulit.erp47.acc.elementary.to.AccAcntBean;

@Service
public class AccElementaryApplicationServiceImpl implements AccElementaryApplicationService {

    @Autowired
    AccAcntDAO accAcntDAO;

    @Override
    public List<AccAcntBean> findAccAcntList(Map<String, String> argsMap) {
        return accAcntDAO.selectAccAcntList(argsMap);
    }

}


