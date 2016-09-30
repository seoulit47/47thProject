package com.seoulit.erp47.med.base.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.med.base.dao.PrscDAO;
import com.seoulit.erp47.med.base.to.PrscBean;
import com.seoulit.erp47.med.base.to.PrscDtlBean;

@Component
public class EmrApplicationServiceImpl implements EmrApplicationService {

	/*@Autowired
    private ReceiptInfoDAO receiptInfoDAO;
    @Autowired
    private BaseExamDAO baseExamDAO;
    @Autowired
    private DiseaseDAO diseaseDAO;
    @Autowired
    private PatientDsDAO patientDsDAO;
    @Autowired
    private PatientPrscDAO patientPrscDAO;*/
    @Autowired
    private PrscDAO prscDAO;

    
    @Override
    public List<PrscBean> findPrscList(Map<String, String> argsMap) {
        return prscDAO.selectPrscList(argsMap);
    }

    @Override
    public List<PrscDtlBean> findPrscDtlList(Map<String, String> argsMap) {
        return prscDAO.selectPrscDtlList(argsMap);
    }


}