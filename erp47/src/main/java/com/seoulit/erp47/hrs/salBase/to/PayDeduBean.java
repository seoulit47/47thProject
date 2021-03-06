package com.seoulit.erp47.hrs.salBase.to;

import java.util.List;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.annotation.Remove;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoul.his.hrs.salBase.to
 * @Class    PayDeduBean.java
 * @Create   2016. 10. 02.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsPayDedu")
public class PayDeduBean extends BaseBean{
	private String salDiv,            // 급여구분
    			   paymDeducDiv,      // 지급공제구분
    			   belongYear,        // 귀속년도
    			   taxDiv,            // 과세구분
    			   probationApply,    // 수습적용
    			   inOutApply,        // 입퇴사자적용
    			   monthSal,          // 월정급여
    			   hireInsur,         // 고용보험
    			   divYn,             // 분류여부
    			   paymDeducCd,       // 지급공제코드
    			   divSectCd,         // 분류구분코드
    			   dicSectNm,         // 분류구분코드명
    			   dline,             // 마감상태
    			   paymDeducNm,       // 지급공제명
    			   taxType,           // 과세유형
				   calFormula,        // 계산식
				   realFormula;		  // 실제계산식
	
	
	private List<PayDeduSectBean> payDeduSectList;

    @Remove
    public List<PayDeduSectBean> getPayDeduSectList() {
        return payDeduSectList;
    }
    @Remove
    public void setPayDeduSectList(List<PayDeduSectBean> payDeduSectList) {
        this.payDeduSectList = payDeduSectList;
    }
}
