package com.xuzhu.fmsrealassetsservice.service;

import com.xuzhu.fmsrealassetsservice.domain.Item;

import java.util.List;
import java.util.Map;

public interface RealAssetsService {
    Map<String, List<Item>> loadRealAssets(String username);
    Map<String, List<Item>> addRealAssetsItem(String username, Item item);
    Map<String, List<Item>> deleteRealAssetsItem(String username, String realAssetsItemName, String realAssetsItemTimePoint);
    Map<String, List<Item>> editRealAssetsItem(String username, Item item);
}
