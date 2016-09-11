package com.seoulit.erp47.hrs.guntae.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.hrs.guntae.dao.GuntaeDAO;
import com.seoulit.erp47.hrs.guntae.dao.HdayDAO;
import com.seoulit.erp47.hrs.guntae.dao.InoutWorkTimeDAO;
import com.seoulit.erp47.hrs.guntae.dao.OverTimeWorkDAO;
import com.seoulit.erp47.hrs.guntae.to.DayGuntaeBean;
import com.seoulit.erp47.hrs.guntae.to.HdayBean;
import com.seoulit.erp47.hrs.guntae.to.InoutWorkTimeBean;
import com.seoulit.erp47.hrs.guntae.to.OverTimeWorkBean;

/**
 * @Package  com.seoul.his.hrs.guntae.applicationService
 * @Class    GuntaeAsImpl.java
 * @Create   2016. 9. 06.
 * @Author   pyh
 * @Description
 *
 * @LastUpdated
 *     
 */
@Service
public class GuntaeApplicationServiceImpl implements GuntaeApplicationService{

    @Autowired
    HdayDAO hdayDAO;

    //@Autowired
    //HolidayDAO holidayDAO;
    
    @Autowired
    InoutWorkTimeDAO inoutWorkTimeDAO;

    @Autowired
    OverTimeWorkDAO overTimeWorkDAO;

    //@Autowired
    GuntaeDAO guntaeDAO;

    //@Autowired
    //YeonchaDAO yeonchaDAO;

    //휴일 조회
    @Override
    public List<HdayBean> findHdayList(Map<String, String> argsMap) {
        return hdayDAO.selectHdayList(argsMap);
    }

    //휴일 일괄처리
    @Override
    public void batchHdayProcess(List<HdayBean> list) {

        for(HdayBean hdayBean : list){

            switch (hdayBean.getStatus()) {
            case "inserted" : hdayDAO.callHday(hdayBean); break;
            case "updated" : hdayDAO.callHday(hdayBean); break;
            case "deleted" : hdayDAO.deleteHday(hdayBean); break;

            }

        }

    }
/*
    //개인휴가 조회
    @Override
    public List<HolidayBean> findHolidayList(Map<String, String> argsMap) {
        return holidayDAO.selectHolidayList(argsMap);
    }

    //관리자 휴가신청 조회
    @Override
    public List<HolidayBean> findAdminHolidayList(Map<String, String> argsMap) {
        return holidayDAO.selectAdminHolidayList(argsMap);
    }

    //휴가신청 일괄처리
    @Override
    public void batchHolidayProcess(List<HolidayBean> list) {
        System.out.println("일괄처리 AS타나?");
        for(HolidayBean holidayBean : list){

            String appType = holidayBean.getAppType();
            String holidayStatus = holidayBean.getHolidayStatus();

            switch(holidayBean.getStatus()){

            case "inserted" : holidayDAO.callHoliday(holidayBean);break;
            case "updated" : holidayDAO.updateHoliday(holidayBean);break;

            }

        }

    }
    */
    //출퇴근시간 조회
    @Override
    public List<InoutWorkTimeBean> findInoutWorkTimeList(Map<String, String> argsMap) {
        return inoutWorkTimeDAO.selectInoutWorkTimeList(argsMap);
    }

    //출퇴근시간 일괄처리
    @Override
    public void batchInoutWorkTimeProcess(List<InoutWorkTimeBean> list) {

        for(InoutWorkTimeBean inoutWorkTimeBean : list){

            switch(inoutWorkTimeBean.getStatus()){

            case "inserted" : inoutWorkTimeDAO.insertInoutWorkTime(inoutWorkTimeBean);break;
            case "updated" : inoutWorkTimeDAO.updateInoutWorkTime(inoutWorkTimeBean);break;

            }

        }

    }

    //개인 시간외근무 조회
    @Override
    public List<OverTimeWorkBean> findOverTimeWorkList(Map<String, String> argsMap) {
        return overTimeWorkDAO.selectOverTimeWorkList(argsMap);
    }

    //관리자 시간외근무 조회
    @Override
    public List<OverTimeWorkBean> findApproverOverTimeWorkList() {
        return overTimeWorkDAO.selectApproverOverTimeWorkList();
    }

    //시간외근무 일괄처리
    @Override
    public void batchOverTimeWorkProcess(List<OverTimeWorkBean> list) {
        System.out.println("시간외근무 일괄처리 AS");
        for(OverTimeWorkBean overTimeWorkbean : list){

            switch(overTimeWorkbean.getStatus()){

            case "inserted" : overTimeWorkDAO.insertOverTimeWork(overTimeWorkbean);break;
            case "updated" : overTimeWorkDAO.updateOverTimeWork(overTimeWorkbean);
                            if(overTimeWorkbean.getBeforeOvertimeNo() != null || overTimeWorkbean.getBeforeOvertimeNo() != ""){
                                overTimeWorkDAO.deleteBeforeOverTimeWork(overTimeWorkbean);
                            }break;
            case "deleted" : overTimeWorkDAO.deleteOverTimeWork(overTimeWorkbean);break;

            }

        }

    }

    //일근태 생성
    @Override
    public List<DayGuntaeBean> createDayGuntae(Map<String, String> argsMap) {
        argsMap.put("errorCode", "");
        argsMap.put("errorMsg", "");
        List<DayGuntaeBean> callDayGuntae = guntaeDAO.callDayGuntae(argsMap);
        if(argsMap.get("errorCode").equals("-1")){
            new RuntimeException(argsMap.get("errorMsg"));
        }
        if(argsMap.get("errorCode").equals("1")){
            System.out.println(argsMap.get("errorMsg"));
        }
        return callDayGuntae;
    }

    //일근태 조회
    @Override
    public List<DayGuntaeBean> findDayGuntaeList(Map<String, String> argsMap) {
        return guntaeDAO.selectDayGuntaeList(argsMap);
    }
/*
    //월근태 조회
    @Override
    public List<MonGuntaeBean> findMonGuntaeList(Map<String, String> argsMap) {
        return guntaeDAO.selectMonGuntaeList(argsMap);
    }

    //월근태 생성
    @Override
    public List<MonGuntaeBean> createMonGuntae(Map<String, String> argsMap) {

        argsMap.put("errorCode", "");
        argsMap.put("errorMsg", "");
        List<MonGuntaeBean> callMonGuntae = guntaeDAO.callMonGuntae(argsMap);
        if(argsMap.get("errorCode").equals("-1")){
            new RuntimeException(argsMap.get("errorMsg"));
        }if(argsMap.get("errorCode").equals("1")){
            System.out.println(argsMap.get("errorMsg"));
        }
        return callMonGuntae;
    }

    //월근태 마감
    @Override
    public List<MonGuntaeCloseBean> closeMonGuntae(Map<String, String> argsMap) {

        argsMap.put("errorCode", "");
        argsMap.put("errorMsg", "");
        List<MonGuntaeBean> callCloseMonGuntae = guntaeDAO.callCloseMonGuntae(argsMap);
        if(argsMap.get("errorCode").equals("-1")){
            new RuntimeException(argsMap.get("errorMsg"));
        }if(argsMap.get("errorCode").equals("1")){
            System.out.println(argsMap.get("errorMsg"));
        }

        List<MonGuntaeCloseBean> monGuntaeCloseList = guntaeDAO.selectMonGuntaeCloseList(argsMap);

        return monGuntaeCloseList;
    }

    //연차 조회
    @Override
    public List<YeonchaBean> findYeonchaList(Map<String, String> argsMap) {
        return yeonchaDAO.selectYeonchaList(argsMap);
    }

    //연차발생
    @Override
    public List<YeonchaBean> callYeoncha(Map<String, String> argsMap) {
        System.out.println("연차발생 applicationService");
        argsMap.put("errorCode", "");
        argsMap.put("errorMsg", "");
        List<YeonchaBean> callYeon = yeonchaDAO.callYeoncha(argsMap);
        if(argsMap.get("errorCode").equals("-1")){
            new RuntimeException(argsMap.get("errorMsg"));
        }
        return callYeon;
    }*/
}
