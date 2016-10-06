package com.seoulit.erp47.acc.elementary.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name = "dsAssiType")
public class AssiTypeBean extends BaseBean{
    private String assiTypeCd,      //보조유형코드
                   assiTypeNm,      //보조유형코드명
                   useYn,           //사용여부
                   accYear,         //회계연도
                   errorCode,
                   errorMsg;
}
