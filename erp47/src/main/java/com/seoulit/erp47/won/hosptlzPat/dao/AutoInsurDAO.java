package com.seoulit.erp47.won.hosptlzPat.dao;

import java.util.List;

import com.seoulit.erp47.won.hosptlzPat.to.AutoInsurBean;

/**
 * DscgPatDAO
 *
 * @Description   퇴원환자조회 및 퇴원일 수정
 * @Author          황태경
 * Created on         2016. 6. 15.
 */

public interface AutoInsurDAO {

    List<AutoInsurBean> selectAutoInsurList(String patNo);  //퇴원환자 조회
    void insertAutoInsur(AutoInsurBean autoInsurBean);  
    void updateAutoInsur(AutoInsurBean autoInsurBean);  
    void deleteAutoInsur(AutoInsurBean autoInsurBean);  
}
