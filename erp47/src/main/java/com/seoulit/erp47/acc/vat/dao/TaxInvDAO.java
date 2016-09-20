package com.seoulit.erp47.acc.vat.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.vat.to.DetailTaxInvBean;
import com.seoulit.erp47.acc.vat.to.TaxInvBean;

public interface TaxInvDAO {

    List<TaxInvBean> selectTaxInvList(Map<String, String> argsMap);

    void insertTaxInv(TaxInvBean taxInvBean);

    void updateTaxInv(TaxInvBean taxInvBean);

    void deleteDetailTaxInv(DetailTaxInvBean detailTaxInvBean);

    void insertDetailTaxInv(DetailTaxInvBean detailTaxInvBean);

    void updateDetailTaxInv(DetailTaxInvBean detailTaxInvBean);

}
