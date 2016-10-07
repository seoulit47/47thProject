package com.seoulit.erp47.hrs.salBase.dao;

import java.util.List;
import java.util.Map;

import org.springframework.dao.DataAccessException;

import com.seoulit.erp47.hrs.salBase.to.HobongBean;
import com.seoulit.erp47.hrs.salBase.to.HobongHistoryBean;
import com.seoulit.erp47.hrs.salBase.to.JobBean;

/**
 * @Package  com.seoulit.erp47.hrs.salBase.dao
 * @Class    HobongDAO.java
 * @Create   2016. 9. 26.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */

public interface HobongDAO {

    //직급조회
	public List<JobBean> findJobList() throws DataAccessException;
	
	//호봉조회
    public List<HobongBean> findHobongList(Map<String, String> argsMap) throws DataAccessException;
    
    //호봉이력조회
    public List<HobongHistoryBean> findHobongHistoryList(Map<String, String> argsMap) throws DataAccessException;
    
    //호봉등록
    public void insertHobong(HobongBean hobongBean) throws DataAccessException;
    
    //호봉수정
    public void updateHobong(HobongBean hobongBean) throws DataAccessException;
    
    //호봉삭제
    public void deleteHobong(HobongBean hobongBean) throws DataAccessException;

    //호봉이력등록
    public void insertHobongHis(HobongHistoryBean hobongHisBean) throws DataAccessException;
    
    //호봉이력수정
    public void updateHobongHis(HobongHistoryBean hobongHisBean) throws DataAccessException;
    
    //호봉이력삭제
    public void deleteHobongHis(HobongHistoryBean hobongHisBean) throws DataAccessException;

}
