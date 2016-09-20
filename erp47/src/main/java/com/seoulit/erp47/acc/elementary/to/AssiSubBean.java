package com.seoulit.erp47.acc.elementary.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Dataset(name = "dsAssiSub")
public class AssiSubBean extends BaseBean{
    String  accYear    //회계연도
          , assiTypeCd //보조유형코드
          , assiSubCd  //보조과목코드
          , assiSubNm  //보조과목코드명
          , useYn;     //사용여부
}
