package com.example.application.data.entity;

import javax.persistence.Embeddable;

@Embeddable
public class Importance {
    private boolean important;
    private int level;

    public boolean important() {
        return important;
    }
    public void setImportant(boolean important) {
        this.important = important;
    }
    public int getLevel() {
        return level;
    }
    public void setLevel(int level) {
        this.level = level;
    }    
}
