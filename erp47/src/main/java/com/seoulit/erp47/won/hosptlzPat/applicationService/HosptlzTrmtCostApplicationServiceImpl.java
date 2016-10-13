package com.seoulit.erp47.won.hosptlzPat.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.won.hosptlzPat.dao.HosptlzPatReceDAO;
import com.seoulit.erp47.won.hosptlzPat.dao.HosptlzTrmtCostDAO;
import com.seoulit.erp47.won.hosptlzPat.exception.HosptlzPatException;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzPatBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzPatReceBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzTrmtCostReceReceiptBean;


/**
 * @Package  com.seoul.his.won.hosptlzPat.applicationService
 * @Class    HosptlzTrmtCostApplicationServiceImpl.java
 * @Create   2016.6.29
 * @Author   hwang
 * @Description
 *
 * @LastUpdated 
 */
@Service
public class HosptlzTrmtCostApplicationServiceImpl implements HosptlzTrmtCostApplicationService {

	@Autowired
	HosptlzTrmtCostDAO hosptlzTrmtCostDAO;

	@Autowired
	HosptlzPatReceDAO hosptlzPatReceDAO;

	@Autowired
	ResourceBundleMessageSource message;

	@Override
	public void calcuHosptlzTrmtCost(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		hosptlzTrmtCostDAO.calcuHosptlzTrmtCost(argsMap);
	}

	@Override
	public List<HosptlzPatBean> findHosptlzTrmtCost(
			Map<String, String> argsMap) throws HosptlzPatException {
		// TODO Auto-generated method stub
		List<HosptlzPatBean> hosptlzPatList;
		hosptlzPatList = hosptlzTrmtCostDAO.selectHosptlzTrmtCost(argsMap);
		for (HosptlzPatBean hosptlzPatBean : hosptlzPatList) {
			if (hosptlzPatBean.getHosptlzYb().equals("N")) {
				throw new HosptlzPatException(message.getMessage("WON001",
						new Object[] { hosptlzPatBean.getPatNm() }, null));
			}
		}
		return hosptlzPatList;
	}

	@Override
	public HosptlzPatReceBean findHosptlzPatRece(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		HosptlzPatReceBean hosptlzPatReceBean;
		
		hosptlzPatReceBean = hosptlzPatReceDAO.selectHosptlzPatRece(argsMap);
		return hosptlzPatReceBean;
	}

	@Override
	public void callHosptlzPatRece(HosptlzPatReceBean hosptlzPatReceBean) {
		// TODO Auto-generated method stub
		hosptlzPatReceDAO.callHosptlzPatRece(hosptlzPatReceBean);
	}

	@Override
	public List<HosptlzTrmtCostReceReceiptBean> callHosptlzCostReceReceipt(
			String outpaReceiptNo) {
		// TODO Auto-generated method stub
		List<HosptlzTrmtCostReceReceiptBean> hosptlzTrmtCostReceReceipt;
		hosptlzTrmtCostReceReceipt = hosptlzTrmtCostDAO
				.callHosptlzCostReceReceipt(outpaReceiptNo);
		return hosptlzTrmtCostReceReceipt;
	}
}
