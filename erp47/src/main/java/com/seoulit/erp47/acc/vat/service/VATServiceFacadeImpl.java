package com.seoulit.erp47.acc.vat.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.acc.vat.applicationService.VatApplicationService;
import com.seoulit.erp47.acc.vat.to.TaxInvBean;
import com.seoulit.erp47.acc.vat.to.VATDeclBean;

@Service
public class VATServiceFacadeImpl implements VATServiceFacade {
	@Autowired
	VatApplicationService vatApplicationService;

	@Override
	public List<TaxInvBean> findTaxInvList(Map<String, String> argsMap) {
		return vatApplicationService.findTaxInvList(argsMap);
	}

	@Override
	public void batchTaxInvProcess(List<TaxInvBean> tempTaxInvList) {
		vatApplicationService.batchTaxInvProcess(tempTaxInvList);
	}
	
    @Override
    public List<VATDeclBean> findVATDeclList(Map<String, String> argsMap) {
        return vatApplicationService.findVATDeclList(argsMap);
    }

}
