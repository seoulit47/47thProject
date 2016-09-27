package com.seoulit.erp47.hrs.salBase.to;

import com.seoulit.erp47.common.annotation.Dataset;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoul.his.hrs.salBase.to
 * @Class    JobBean.java
 * @Create   2016. 9. 26.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsJob")
public class JobBean{
    private String detailCodeName,   // 상세코드명
	               detailCode;       // 상세코드

}
