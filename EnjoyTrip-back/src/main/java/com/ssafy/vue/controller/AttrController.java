package com.ssafy.vue.controller;

import java.util.List;
import java.util.logging.Logger;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.vue.model.Attraction;
import com.ssafy.vue.model.Search;
import com.ssafy.vue.model.Sido;
import com.ssafy.vue.model.gugun;
import com.ssafy.vue.model.service.AttrService;

@RestController
@RequestMapping("/attr")
public class AttrController {
    private final Logger logger = Logger.getLogger(AttrController.class.getName());

    private AttrService attrService;

    public AttrController(AttrService attrService) {
        this.attrService = attrService;
    }

    // select로 검색 조건 설정하면 그걸로 조회하는 컨트롤러
    @PostMapping("/search")
    public ResponseEntity<List<Attraction>> search(@RequestBody Search search) {
        try {
            logger.info(search.getSido());
            logger.info("==================================");
            List<Attraction> list = attrService.search(search);
            logger.info(list.toString());
            return ResponseEntity.ok().body(list);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // 메인 페이지에서 키워드 검색으로 조회하는 컨트롤러
    @GetMapping("/keyword")
    public ResponseEntity<List<Attraction>> keyword(@RequestParam String keyword) {
        try {
            logger.info(keyword);
            logger.info("==================================");
            List<Attraction> list = attrService.searchByKeyword(keyword); // 서비스 계층의 메소드 호출하여 검색 결과 가져오기
            logger.info(list.toString());
            return ResponseEntity.ok().body(list);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // 상세 페이지에서 선택한 contentId로 조회하는 컨트롤러
    @GetMapping("/detail/{contentId}")
    public ResponseEntity<Attraction> detail(@PathVariable String contentId) {
        try {
            Attraction attraction = attrService.detail(contentId);
            return ResponseEntity.ok().body(attraction);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // 선택한 sido 코드에 따라 gugun을 보여주는 컨틀롤러
    @GetMapping("/gugun/{sidoCode}")
    public ResponseEntity<List<gugun>> getGugun(@PathVariable("sidoCode") int sidocode) {
        try {
            List<gugun> gugunList = attrService.getGugun(sidocode);
            return ResponseEntity.ok().body(gugunList);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    // sido 코드를 가지고 와서 보여준다.
    @GetMapping("/sido")
    public ResponseEntity<List<Sido>> getGugun() {
        try {
            List<Sido> sidoList = attrService.getSido();
            return ResponseEntity.ok().body(sidoList);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // 메인페이지에 랜덤으로 여행지를 띄울 코드
    @GetMapping("/main")
    public ResponseEntity<List<Attraction>> getRandomAttractions() {
        try {
            List<Attraction> attractions = attrService.getRandomAttractions(); // 서비스 계층의 메소드 호출하여 랜덤 여행지 조회
            return ResponseEntity.ok().body(attractions);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
