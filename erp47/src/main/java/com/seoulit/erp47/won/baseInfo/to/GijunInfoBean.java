package com.seoulit.erp47.won.baseInfo.to;

import java.util.List;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.annotation.Remove;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.won.base.to
 * @Class    GijunInfoBean.java
 * @Create   2016. 10. 7.
 * @Author   김봉진
 * @Description
 *
 * @LastUpdated 
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsGijunInfo")
public class GijunInfoBean extends BaseBean{
	String gijunCd,          // 기준코드
	       gijunNm,          // 기준코드명
	       useYb;            // 사용유무
	
	private List<GijunInfoDetailBean> gijunInfoDetailList;

	@Remove
    public List<GijunInfoDetailBean> getGijunInfoDetailList() {
        return gijunInfoDetailList;
    }

	@Remove
    public void setGijunInfoDetailList(List<GijunInfoDetailBean> gijunInfoDetailList) {
        this.gijunInfoDetailList = gijunInfoDetailList;
    }
}