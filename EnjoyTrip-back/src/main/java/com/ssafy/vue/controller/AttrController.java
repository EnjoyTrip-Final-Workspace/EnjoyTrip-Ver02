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

import io.swagger.annotations.ApiParam;


@RestController
@RequestMapping("/attr")
public class AttrController {
    private final Logger logger = Logger.getLogger(AttrController.class.getName());

    private AttrService attrService;

    public AttrController(AttrService attrService) {
        this.attrService = attrService;
    }

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
    
    // 0516 시도추가
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
}