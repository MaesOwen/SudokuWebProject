/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sudokutestpackage;

import org.junit.Test;
import static org.junit.Assert.*;
import sudokupackage.Sudoku;

/**
 *
 * @author Owen
 */
public class SudokuTest {
    
    @Test
    public void testAdd(){
        Sudoku s = new Sudoku();
        s.add(0, 5);
        assertEquals(1, s.size());       
        
    }
    @Test
    public void testSet(){
        Sudoku s = new Sudoku();
        s.createTestSudoku();
        s.set(0, 5);
        assertEquals(5, s.get(0));       
        
    }
    @Test
    public void testSizeTestSudoku(){
        Sudoku s = new Sudoku();
        s.createTestSudoku();
        assertEquals(81, s.size());
        
    }    
}
