package com.seoulit.erp47.med.base.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.med.base.to
 * @Class    PrscDtlBean.java
 * @Create   
 * @Author   
 * @Description
 *
 * @LastUpdated 
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsPrscDtl")
public class PrscDtlBean extends BaseBean {

    private String prescNo,         // 진단서 번호
                   prescCd,         // 처방코드
                   emgYn,           // 응급여부
                   prnYn,           // PRN 여부
                   antiYn,          // 항생제 여부
                   holdingYn,       // 보류 여부
                   mtrlYn,          // 검체보관 여부
                   mtrlNm,          // 검체명
                   MtrlBodyPart,    // 검체 부위
                   examWishDate,    // 검사희망일
                   times,           // 횟수
                   insurance,       // 보험
                   selectCareYn,    // 선택진료여부
                   clncStudyYn,     // 임상연구 여부
                   patType,         // 환자 유형
                   remark,          // 특이사항
                   irradiYn,        // 방사선조사 여부
                   amount,          // 수량
                   purpose,         // 수혈 사용목적
                   trfuLoc,         // 수혈 시행장소
                   ast,             // 간기능 검사 여부
                   bloodDonor,      // 헌혈자
                   volume,          // 부피
                   unit,            // 단위
                   takeWay,         // 재활 부위
                   days,            // 재활 일수
                   prescDtlNm,      // 처방명
                   prescType;       // 진단서 종류
}
