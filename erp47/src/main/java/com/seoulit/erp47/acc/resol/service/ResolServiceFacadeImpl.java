package com.seoulit.erp47.acc.resol.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.acc.resol.applicationService.AccountApplicationService;
import com.seoulit.erp47.acc.resol.applicationService.AppendFileApplicationService;
import com.seoulit.erp47.acc.resol.applicationService.AutoJourRuleApplicationService;
import com.seoulit.erp47.acc.resol.applicationService.JourApplicationService;
import com.seoulit.erp47.acc.resol.applicationService.PayRecApplicationService;
import com.seoulit.erp47.acc.resol.applicationService.ResolApplicationService;
import com.seoulit.erp47.acc.resol.to.AccountBean;
import com.seoulit.erp47.acc.resol.to.AppendFileBean;
import com.seoulit.erp47.acc.resol.to.AutoJourRuleBean;
import com.seoulit.erp47.acc.resol.to.JourBean;
import com.seoulit.erp47.acc.resol.to.PayRecBean;
import com.seoulit.erp47.acc.resol.to.ResolLetBean;
import com.seoulit.erp47.acc.vat.applicationService.VatApplicationService;
import com.seoulit.erp47.acc.vat.to.TaxInvBean;

@Service
public class ResolServiceFacadeImpl implements ResolServiceFacade{
    @Autowired
    ResolApplicationService resolApplicationService;
    @Autowired
    AccountApplicationService accountApplicationService;
    @Autowired
    AutoJourRuleApplicationService autoJourRuleApplicationService;
    @Autowired
    JourApplicationService jourApplicationService;
    @Autowired
    PayRecApplicationService payRecApplicationService;
    @Autowired
    VatApplicationService taxInvApplicationService;
    @Autowired
    AppendFileApplicationService appendFileApplicationService;

    @Override
    public List<ResolLetBean> findResolLetList(Map<String, String> argsMap) {
        return resolApplicationService.findResolLetList(argsMap);
    }

    @Override
    public List<AccountBean> findAccount(Map<String, String> argsMap) {
        return accountApplicationService.findAccount(argsMap);
    }

    @Override
    public String getResolNo() {
        return resolApplicationService.getResolNo();
    }

    @Override
    public List<AutoJourRuleBean> findAutoJourRuleList(Map<String, String> argsMap) {
        return autoJourRuleApplicationService.findAutoJourRuleList(argsMap);
    }

    @SuppressWarnings("unchecked")
    @Override
    public void registResolLet(HashMap<String, Object> dataSetMap) {
        ResolLetBean resolLetBean = (ResolLetBean)dataSetMap.get("resolLetBean");
        System.out.println(resolLetBean.getResolNo()+"후회회호히회횧");
        resolApplicationService.registResolLet(resolLetBean);
        List<JourBean> jourBeanList = (List<JourBean>)dataSetMap.get("jourList");
        jourApplicationService.registJour(jourBeanList);
        List<PayRecBean> payRecList = (List<PayRecBean>)dataSetMap.get("payRecList");
        payRecApplicationService.registPayRec(payRecList);
        List<TaxInvBean> taxInvList =  (List<TaxInvBean>)dataSetMap.get("taxInvList");
        taxInvApplicationService.batchTaxInvProcess(taxInvList);
    }

    @SuppressWarnings("unchecked")
    @Override
    public void batchResolLetProcess(HashMap<String, Object> dataSetMap) {
        ResolLetBean resolLetBean = (ResolLetBean)dataSetMap.get("resolLetBean");
        resolApplicationService.modifyResolLet(resolLetBean);
        List<JourBean> jourBeanList = (List<JourBean>)dataSetMap.get("jourList");
        jourApplicationService.batchResolLetProcess(jourBeanList);
        List<PayRecBean> payRecList = (List<PayRecBean>)dataSetMap.get("payRecList");
        payRecApplicationService.batchResolLetProcess(payRecList);
        List<TaxInvBean> taxInvList =  (List<TaxInvBean>)dataSetMap.get("taxInvList");
        taxInvApplicationService.batchTaxInvProcess(taxInvList);
    }

    @Override
    public ResolLetBean findResolLetDetail(Map<String, String> argsMap) {
        ResolLetBean resolLetBean = new ResolLetBean();
        List<JourBean> jourList = jourApplicationService.findJourRecDetail(argsMap);
        List<PayRecBean> payRecList = payRecApplicationService.findPayRecDetail(argsMap);
        List<AppendFileBean> appendFileList = appendFileApplicationService.findAppendFileDetail(argsMap);
        resolLetBean.setJourList(jourList);
        resolLetBean.setPayRecList(payRecList);
        resolLetBean.setAppendFileList(appendFileList);
        return resolLetBean;
    }
}
