package com.seoulit.erp47.won.hosptlzPat.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * DscgPatBean
 *
 * @Description   퇴원환자(입원접수 Table)
 * @Author         박 영 희
 * Created on         2016. 10. 06.
 */

@Getter
@Setter
@ToString
@Dataset(name="dsDscgPat")
public class DscgPatBean extends BaseBean{

	private String patNo			// 환자등록번호
						 , patNm			// 환자이름
						 , hosptlzDate	// 입원일자
						 , dscgDate		// 퇴원일자
						 , trmtDept		// 진료과
						 , hroom			// 병실
						 , dscgGubun;	// 퇴원구분

	
}
