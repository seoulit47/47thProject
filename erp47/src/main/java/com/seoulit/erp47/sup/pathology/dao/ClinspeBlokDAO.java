package com.seoulit.erp47.sup.pathology.dao;

import java.util.List;

import com.seoulit.erp47.sup.pathology.to.ClinspeBean;
import com.seoulit.erp47.sup.pathology.to.SlClinspeBlokBean;


public interface ClinspeBlokDAO {

	List<SlClinspeBlokBean> findClinspeBlokList(SlClinspeBlokBean clinspeNoBean);

	void insertClinspeBlok(SlClinspeBlokBean slClinspeBlokBean);

	void updateClinspeBlok(SlClinspeBlokBean slClinspeBlokBean);

	void deleteClinspeBlok(SlClinspeBlokBean slClinspeBlokBean);

	List<ClinspeBean> findClinspeNoList();

    void deleteClinspeBlok(ClinspeBean clinspeBean);

}
