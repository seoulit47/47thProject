package com.seoulit.erp47.log.inven.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.inven.to.PstInvenBean;

public interface PstInvenDAO {
    //실재고조회
	List<PstInvenBean> selectPstInvenList(Map<String, String> argsMap);
	//실재고저장
	void insertPstInvenList(PstInvenBean pstInvenBean);
	void updatePstInvenList(PstInvenBean pstInvenBean);
    void deletePstInvenList(PstInvenBean pstInvenBean);
}
