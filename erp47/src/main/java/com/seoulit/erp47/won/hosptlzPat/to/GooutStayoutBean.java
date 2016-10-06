package com.seoulit.erp47.won.hosptlzPat.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


/**
 * @Package  com.seoul.his.won.hosptlzPat.to
 * @Class    GooutStayoutBean.java
 * @Create   2016. 10. 06
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name="dsGooutStayout")
public class GooutStayoutBean extends BaseBean{
	private String appDate              //신청일자
							,cfmr                   //확인자(담당의사)
							,cfmrState            //확인상태
							,cfmtDate            //확인일시
							,comebackDate   //외박복귀일
							,gooutDate          //외박시작일
							,gooutStayoutState   //외출외박상태
							,hosptlzReceiptNo    //입원접수번호
							,hroom                //병실
							,note                   //비고
							,patNo                 //환자등록번호(*)
							,totalGooutTime   //총외출시간
							,totalStayoutDay  //총외박일수
							,trmtdeptnm        //진료과명
							,ward                   //병동
							,comebackTime    //외출복귀시간
							,gooutTime          //외출시간
							,gooutDay           //외출날짜
							,patNm              //환자명
							,state;                //외출, 외박 진행 상태

	
}
