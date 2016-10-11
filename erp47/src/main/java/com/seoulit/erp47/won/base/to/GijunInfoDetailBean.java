package com.seoulit.erp47.won.base.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package com.seoulit.erp47.won.base.to
 * @Class GijunInfoDetailBean.java
 * @Create 2016. 10. 7.
 * @Author 김봉진
 * @Description
 *
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsGijunInfoDetail")
public class GijunInfoDetailBean extends BaseBean {
	String dtlCd, // 상세기준코드
			dtlNm, // 상세기준코드명
			useYb, // 사용유무
			filedWorkCngYb, // 변경유무
			gijunCd; // 기준코드
}