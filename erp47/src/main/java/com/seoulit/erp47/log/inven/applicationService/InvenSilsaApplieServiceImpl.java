package com.seoulit.erp47.log.inven.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.log.inven.dao.InvenSilsaDAO;
import com.seoulit.erp47.log.inven.to.InvenSilsaBean;
import com.seoulit.erp47.log.inven.to.InvenSilsaDtlInfoBean;

@Service
public class InvenSilsaApplieServiceImpl implements InvenSilsaApplicationService {
	@Autowired
	InvenSilsaDAO invenSilsaDAO;

	//창고실사 조회
	@Override
	public List<InvenSilsaBean> findInvenSilsaList(Map<String, String> argsMap) {
		List<InvenSilsaBean> invenSilsaList;
		invenSilsaList = invenSilsaDAO.selectInvenSilsaList(argsMap);
		return invenSilsaList;
	}

	//창고실사 저장
	@Override
	public void batchInvenSilsaListProcess(List<InvenSilsaBean> invenSilsaList, List<InvenSilsaDtlInfoBean> invenSilsaDtlInfoList) {
		for(InvenSilsaBean invenSilsaBean : invenSilsaList){
			String status=invenSilsaBean.getStatus();
			List<InvenSilsaDtlInfoBean> invenSilsaDtlInfoBean = invenSilsaBean.getInvenSilsaDtlInfoList();
			switch (status) {
			case "inserted":
				invenSilsaDAO.insertInvenSilsaList(invenSilsaBean);
				batchInvenSilsaDtlInfoListProcess(invenSilsaDtlInfoBean);
				break;

			case "updated":
				invenSilsaDAO.updateInvenSilsaList(invenSilsaBean);
				batchInvenSilsaDtlInfoListProcess(invenSilsaDtlInfoBean);
				break;

			case "deleted":
				invenSilsaDAO.deleteInvenSilsaList(invenSilsaBean);
				batchInvenSilsaDtlInfoListProcess(invenSilsaDtlInfoBean);
				break;
			}
		}
		batchInvenSilsaDtlInfoListProcess(invenSilsaDtlInfoList);
	}

	//창고실사상세저장
	public void batchInvenSilsaDtlInfoListProcess
		(List<InvenSilsaDtlInfoBean> invenSilsaDtlInfoList) {
		for(InvenSilsaDtlInfoBean invenSilsaDtlInfoBean : invenSilsaDtlInfoList){
			String status=invenSilsaDtlInfoBean.getStatus();
			switch (status) {
			case "inserted":
				invenSilsaDAO.insertInvenSilsaDtlInfoList(invenSilsaDtlInfoBean);
				break;

			case "updated":
				invenSilsaDAO.updateInvenSilsaDtlInfoList(invenSilsaDtlInfoBean);
				break;

			case "deleted":
				invenSilsaDAO.deleteInvenSilsaDtlInfoList(invenSilsaDtlInfoBean);
				break;
			}
		}
	}

    @Override
    public void adjustPstInven(List<InvenSilsaDtlInfoBean> gdsAnspHistList) {
        for(InvenSilsaDtlInfoBean invenSilsaDtlInfoBean : gdsAnspHistList){
        invenSilsaDAO.adjustPstInven(invenSilsaDtlInfoBean);
        }
    }
}

