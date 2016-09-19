package com.seoulit.erp47.acc.elementary.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.acc.elementary.dao.AccAcntDAO;
import com.seoulit.erp47.acc.elementary.dao.AssiSubDAO;
import com.seoulit.erp47.acc.elementary.to.AccAcntBean;
import com.seoulit.erp47.acc.elementary.to.AssiSubBean;

@Service
public class AccElementaryApplicationServiceImpl implements AccElementaryApplicationService {

    @Autowired
    AccAcntDAO accAcntDAO;
   // @Autowired
    //AssiSubDAO assiSubDAO;

    //@Override
    //public List<AccAcntBean> findAccAcntList(Map<String, String> argsMap) {
       //return accAcntDAO.selectAccAcntList(argsMap);
   // }

	//@Override
	//public List<AssiSubBean> findAssiSubList(Map<String, String> argsMap) {
		//return assiSubDAO.selectAssiSubList(argsMap);
	//}

}


