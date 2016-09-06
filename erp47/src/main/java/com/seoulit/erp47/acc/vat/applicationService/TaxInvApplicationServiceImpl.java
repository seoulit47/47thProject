package com.seoulit.erp47.acc.vat.applicationService;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.acc.vat.dao.TaxInvDAO;
import com.seoulit.erp47.acc.vat.to.DetailTaxInvBean;
import com.seoulit.erp47.acc.vat.to.TaxInvBean;

@Service
public class TaxInvApplicationServiceImpl implements TaxInvApplicationService {
	@Autowired
	TaxInvDAO taxInvDAO;

	@Override
	public List<TaxInvBean> findTaxInvList(Map<String, String> argsMap) {
		return taxInvDAO.selectTaxInvList(argsMap);
	}

	@Override
	public void batchTaxInvProcess(List<TaxInvBean> taxInvList) {
		List<DetailTaxInvBean> detailTaxInvList = new ArrayList<DetailTaxInvBean>();
		for (TaxInvBean bean : taxInvList) {
			detailTaxInvList.addAll(bean.getDetailTaxInvList());
		}

		for (TaxInvBean taxInvBean : taxInvList) {
			switch (taxInvBean.getStatus()) {
			case "inserted": taxInvDAO.insertTaxInv(taxInvBean); break;
			case "updated": taxInvDAO.updateTaxInv(taxInvBean);	break;
			}
		}

		for (DetailTaxInvBean detailTaxInvBean : detailTaxInvList) {
			switch (detailTaxInvBean.getStatus()) {
			case "deleted": taxInvDAO.deleteDetailTaxInv(detailTaxInvBean); break;
			case "inserted":System.out.println(detailTaxInvBean.getPubNo());
							taxInvDAO.insertDetailTaxInv(detailTaxInvBean);break;
			case "updated": taxInvDAO.updateDetailTaxInv(detailTaxInvBean);	break;
			}
		}
	}

}
