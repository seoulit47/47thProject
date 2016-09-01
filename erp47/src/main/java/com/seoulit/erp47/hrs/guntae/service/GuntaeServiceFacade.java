package com.seoulit.erp47.hrs.guntae.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.guntae.to.InoutWorkTimeBean;

/**
 * @Package  com.seoul.his.hrs.guntae.service
 * @Class    GuntaeServiceFacade.java
 * @Create   2016. 8. 30.
 * @Author   PYH
 * @Description
 *
 * @LastUpdated
 *     
 */
public interface GuntaeServiceFacade {

    //휴일 조회
    //List<HdayBean> findHdayList(Map<String, String> argsMap);

    //휴일 일괄처리
    //void batchHdayProcess(List<HdayBean> list);

    //개인휴가 조회
    //List<HolidayBean> findHolidayList(Map<String, String> argsMap);

    //관리자 휴가신청 조회
    //List<HolidayBean> findAdminHolidayList(Map<String, String> argsMap);

    //휴가신청 일괄처리
    //void batchHolidayProcess(List<HolidayBean> list);

    //출퇴근시간 조회
    List<InoutWorkTimeBean> findInoutWorkTimeList(Map<String, String> argsMap);

    //출퇴근시간 일괄처리
    void batchInoutWorkTimeProcess(List<InoutWorkTimeBean> list);

    //개인 시간외근무 조회
    //List<OverTimeWorkBean> findOverTimeWorkList(Map<String, String> argsMap);

    //관리자 시간외근무 조회
    //List<OverTimeWorkBean> findApproverOverTimeWorkList();

    //시간외근무 일괄처리
    //void batchOverTimeWorkProcess(List<OverTimeWorkBean> list);

    //일근태 생성
    //List<DayGuntaeBean> createDayGuntae(Map<String, String> argsMap);

    //일근태 조회
    //List<DayGuntaeBean> findDayGuntaeList(Map<String, String> argsMap);

    //월근태 조회
    //List<MonGuntaeBean> findMonGuntaeList(Map<String, String> argsMap);

    //월근태 생성
    //List<MonGuntaeBean> createMonGuntae(Map<String, String> argsMap);

    //월근태 마감
    //List<MonGuntaeCloseBean> closeMonGuntae(Map<String, String> argsMap);

    //연차 조회
    //List<YeonchaBean> findYeonchaList(Map<String, String> argsMap);

    //연차발생
    //List<YeonchaBean> callYeoncha(Map<String, String> argsMap);
}
