package com.seoulit.erp47.log.inpt.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.log.inpt.to
 * @Class    SkillExmntHistBean.java
 * @Create   2016. 9. 20.
 * @Author   mickey
 * @Description 기술검수 빈
 *
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsSkillExmntHist")
public class SkillExmntHistBean extends BaseBean{
    private String 
    assetGrpCd      //자산분류코드
    ,assetNm        //자산명
    ,bigGrpCd       //대분류코드
    ,ctrtNo         //계약번호
    ,ctryNm         //국가명
    ,exmntDate      //검사일지
    ,gdsCd          //물품코드
    ,midGrpCd       //중분류코드
    ,modelNm        //모델명
    ,prodCompNm     //제조회사명
    ,prodNo         //제조번호
    ,skillExmntNo   //기술검사번호
    ,mngnt          //소분류코드
    ,smGrpCd;       //관리부서

    
}
