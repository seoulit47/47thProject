package com.seoulit.erp47.acc.resol.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@Dataset(name = "dsAutoJourRule")
public class AutoJourRuleBean extends BaseBean{
    private String  accYear      , //ȸ��⵵
            busiDivCd    , //���������ڵ�
            jourDivNm    , //�а����и�
            creDebDiv    , //��������
            acntCd       , //���������ڵ�
            assiSubCd  , //���������ڵ�
            note         , //���
            jourCd       , //�а��ڵ�
            parentJourCd , //�����а��ڵ�
            acntCdNm     , //���������
            assiSubCdNm  , //���������
            bimokCd		 ; //������ �ڵ�
}
