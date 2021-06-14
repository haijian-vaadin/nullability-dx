package com.example.application.data.entity;

import javax.persistence.Embeddable;

@Embeddable
public class Importance {
    private boolean important;
    private int level;

    public boolean isImmportant() {
        return important;
    }
    public void setImmportant(boolean immportant) {
        this.important = immportant;
    }
    public int getLevel() {
        return level;
    }
    public void setLevel(int level) {
        this.level = level;
    }    
}
