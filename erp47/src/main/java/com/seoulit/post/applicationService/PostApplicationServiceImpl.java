package com.seoulit.post.applicationService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.post.dao.PostDAO;
import com.seoulit.post.to.PostBean;
import com.seoulit.post.to.PostCondBean;

@Component
public class PostApplicationServiceImpl implements PostApplicationService {
    
    @Autowired
    private PostDAO postDAO;
    
    @Override
    public List<PostCondBean> findSidoList() {
        return postDAO.selectSidoList();
    }

    @Override
    public List<PostCondBean> findSigunguList(String sido) {
        return postDAO.selectSigunguList(sido);
    }

    @Override
    public List<PostBean> findRoadPostList(PostCondBean postCondBean) {
        return postDAO.selectRoadPostList(postCondBean);
    }
    
    @Override
    public List<PostBean> findDongPostList(String dong) {
        return postDAO.selectDongPostList(dong);
    }
}
