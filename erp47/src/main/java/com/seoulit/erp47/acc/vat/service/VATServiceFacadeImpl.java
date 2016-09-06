package com.seoulit.erp47.acc.vat.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.acc.vat.applicationService.TaxInvApplicationService;
import com.seoulit.erp47.sup.vat.to.TaxInvBean;

@Service
public class VATServiceFacadeImpl implements VATServiceFacade {
	@Autowired
	TaxInvApplicationService taxInvApplicationService;

	@Override
	public List<TaxInvBean> findTaxInvList(Map<String, String> argsMap) {
		return taxInvApplicationService.findTaxInvList(argsMap);
	}

	@Override
	public void batchTaxInvProcess(List<TaxInvBean> tempTaxInvList) {
		taxInvApplicationService.batchTaxInvProcess(tempTaxInvList);
	}

}
