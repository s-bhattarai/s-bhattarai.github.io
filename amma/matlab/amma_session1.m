%
% amma_session1.m
% S. Bhattarai
% 1 October 2018
% AMMA Session 1 - MATLAB Revisited
% Loading a data file, investigating the data set and presenting results.
%
% The dataset you will investigate is a paired set: 
%   - Attendance at Maths class
%   - Final overall score in Maths
% 
% Can you use this determine the relationship between attendance and
% performance?
%

%
% 1. Provide the location of the data file and assign the filename to the
% variable xl_filename. You should have the data file 
% attendance_vs_score.xlsx is in the datasets folder within the current 
% folder. 
% 
xl_filename = fullfile(pwd,'datasets','attendance_vs_score.xlsx');

%
% 2. Open 'attendance_vs_score.xlsx' in Excel
% 3. Run help xlsread in the Command Window
% 4. Use xlsread to load the data into a MATLAB variable
% Tip: Choose a suitable, descriptive name for your MATLAB variable
%
att_v_score = xlsread(xl_filename);

%
% The previous command should load the data from the Excel file into a 36x2
% double MATLAB variable.
% 

% 5. Check the workspace to make sure that the data has been loaded
% sucessfully. 
%
% In order to automate data processing, it is necessary to be able to load
% data from scripts and functions, as opposed by using import buttons from
% the Graphical User Interface. MATLAB has in-built function for dealing
% with a wide range of input data file types (.xlsx, .txt, .csv, .json). We
% will explore these capabilites further next week. 
%

attendance = att_v_score(:,1);
score = att_v_score(:,2);

%
% 6. The first way to investigate the data set is through visualisation.
% What is the best way to visualise this data? Usually would try the plot
% function. 
%
% 
figure(1);
plot(attendance, score);
%
% 7. Consider the output from plot and why it is inappropriate. 
% 

figure(2);
hold on
grid on

scatter(attendance, score, 50,'r.');
title('Investigating the relationship between Attendance and Overall Perfomance in Marks','FontSize',14);
xlabel('Attendance','FontSize',14);
ylabel('Marks','FontSize',14);
set(gca, 'FontSize', 13)

%
% 8. Fit a linear model to the data, and show the line of best fit along
% with the 
% 
p = polyfit(attendance, score, 1);
f = polyval(p,attendance);
plot(attendance,f,'k--');

%
% Exercise. Improve upon this analysis with appropriate summary statistics
% and provide your own interpretation of the results, including a critical
% analysis of the limitations of the analysis.
%
%