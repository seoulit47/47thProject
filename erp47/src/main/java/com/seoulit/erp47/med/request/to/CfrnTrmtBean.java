package com.seoulit.erp47.med.request.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
@Dataset(name="dsCfrnTrmt")
public class CfrnTrmtBean extends BaseBean{

	
	
		private String patNo, //환자번호
					  patDiv,//환자구분
					  patNm,//환자명
					  cfrnTrmtNo,//협의진료번호
					  trmtDeptNm,//진료과명
					  trmtDate,//진료일
					  trmtTime,//진료시간
					  trmtDept,//진료과
					  hroom,//병실
					  mtDoct,//주치의
					  hopeDoctNm,//희망주치의
					  hopeDate,//희망일자
					  hopeDoct,//희망의사
					  callYN,//왕진여부
					  adrYN,//ADR여부
					  emeYN,//응급여부
					  ward,//병동
					  respDoctNm,//회진의명
					  respDoct,//회진의사
					  respDate,//회진일자
					  respCon,//회진내용
					  respType,//
					  respDept,//회진과
					  respDeptNm,//회진과명
					  askingDoct,//의뢰의
					  askingDept,//의뢰과
					  askingDeptNm,//의뢰과명
					  askingDiv,//의뢰구분
					  askingCon,//의뢰내용
					  askingCau,//의뢰사유
					  askingDoctNm,//의뢰의사명
					  askingDate;//의뢰일자
}
