package com.seoulit.erp47.med.base.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoul.his.med.base.to
 * @Class    BaseExamBean.java
 * @Create   2016. 10. 4.
 * @Author   mic
 * @Description 환자 기초검사 TO
 *
 * @LastUpdated
 */
@Getter
@Setter
@ToString
@Dataset(name="dsBaseExam")
public class BaseExamBean extends BaseBean {

    private String patNo,               // 환자등록번호
                   systolicPressure,    // 혈압수축기
                   diastolicPressure,   // 혈압이완기
                   pulse,               // 맥박
                   respirationRate,     // 호흡수
                   bodyTemp,            // 체온
                   sopMemo;             // S/O/P 메모

}
