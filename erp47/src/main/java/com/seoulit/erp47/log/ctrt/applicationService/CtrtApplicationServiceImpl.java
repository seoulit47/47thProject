package com.seoulit.erp47.log.ctrt.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.log.ctrt.dao.CtrtDAO;
import com.seoulit.erp47.log.ctrt.to.CtrtBean;

@Component
public class CtrtApplicationServiceImpl implements CtrtApplicationService{
	@Autowired
	CtrtDAO ctrtDAO;
	
	@Override
	public List<CtrtBean> findCtrtList(Map<String, String> argsMap) {
		return ctrtDAO.findCtrtList(argsMap);
	}
	
	@Override
	public void batchCtrtList(List<CtrtBean> ctrtList) {
		for(CtrtBean bean : ctrtList){
			switch(bean.getStatus()){
			case "inserted" :
				ctrtDAO.insertCtrtBean(bean);
				break;
			case "updated" :
				ctrtDAO.updateCtrtBean(bean);
				break;
			case "deleted" :
				ctrtDAO.deleteCtrtBean(bean);
				break;
			}
		}
	}

}
